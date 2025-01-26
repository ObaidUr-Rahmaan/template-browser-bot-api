import express from 'express';
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";
import chalk from "chalk";
import boxen from "boxen";
import cors from 'cors';
import StagehandConfig from './stagehand.config.js';

process.removeAllListeners('warning');
process.on('warning', (warning) => {
  if (warning.name === 'DeprecationWarning' && warning.message.includes('punycode')) {
    return;
  }
  console.warn(warning);
});

const app = express();
app.use(cors());
app.use(express.json());

function announce(message: string, title?: string) {
  console.log(
    boxen(message, {
      padding: 1,
      margin: 3,
      title: title || "Stagehand",
    })
  );
}

async function main({
  page,
  context,
  stagehand,
}: {
  page: any;
  context: any;
  stagehand: Stagehand;
}) {
  await page.goto("https://docs.browserbase.com/");

  const description = await page.extract({
    instruction: "extract the title, description, and link of the quickstart",
    schema: z.object({
      title: z.string(),
      link: z.string(),
      description: z.string(),
    }),
  });

  announce(
    `The ${chalk.bgYellow(description.title)} is at: ${chalk.bgYellow(
      chalk.blue(description.link)
    )}` +
      `\n\n${chalk.bgYellow(description.description)}` +
      `\n\n${chalk.gray(JSON.stringify(description, null, 2))}`,
    "Extract"
  );

  const observeResult = await page.observe({
    instruction: "Find the links under the 'Guides' section",
  });

  announce(
    `${chalk.green("Observe:")} We can click:\n${observeResult
      .map(
        (r: { description: string; selector: string }) => 
          `"${chalk.yellow(r.description)}" -> ${chalk.gray(r.selector)}`
      )
      .join("\n")}`,
    "Observe"
  );

  try {
    const quickStartSelector = `#content-area > div.relative.mt-8.prose.prose-gray.dark\:prose-invert > div > a:nth-child(1)`;
    await page.waitForSelector(quickStartSelector);
    await page.locator(quickStartSelector).click();
    await page.waitForLoadState("networkidle");
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }
    announce(
      `${chalk.red(
        "Looks like an error occurred running Playwright. Let's have Stagehand take over!"
      )} \n${chalk.gray(e.message)}`,
      "Playwright"
    );

    await page.act({
      action: "Click the link to the quickstart",
    });
  }

  return { description, observeResult };
}

app.get('/test', async (req, res) => {
  try {
    const stagehand = new Stagehand(StagehandConfig);
    await stagehand.init();

    const page = stagehand.page;
    const context = stagehand.context;
    
    const result = await main({
      page,
      context,
      stagehand,
    });

    await stagehand.close();
    
    return res.json(result);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Failed to run browser automation' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Browser automation server running on http://localhost:${PORT}`);
}); 