# Template Browser Automation Agent

A template browser automation service built with ExpressJS and Stagehand.

Create your own browser agent to crawl the web, extract data, and perform actions on your behalf.

## Why Browser Agents are the future?

Browser agents are poised to revolutionize how we interact with the web by automating complex human tasks:

- Research: Gathering data across multiple sites, comparing options, and synthesizing findings
- Communication: Managing emails, scheduling, and coordinating across platforms 
- E-commerce: Price monitoring, product comparisons, and automated purchasing
- Applications: Filling forms, submitting documents, and tracking status
- Data Entry: Transferring information between systems and formats
- Monitoring: Tracking changes, updates and notifications across sites

These agents can handle repetitive web tasks 24/7 with speed and consistency that humans can't match. As they get smarter with AI, they'll tackle increasingly sophisticated workflows while adapting to changing websites and requirements.

Stagehand, specifically, helps embed AI requests into the browser automation process, making automations self-healing. Instead of brittle selectors, the AI model can find the exact elements or data you want on a page by understanding their purpose and context - even as websites change. This makes browser automation significantly more reliable compared to traditional approaches that break when sites update their HTML structure.

## Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file from the example:
```bash
cp .env.example .env
```

3. Add your API keys to `.env`:
- `BROWSERBASE_API_KEY`: Your Browserbase API key
- `BROWSERBASE_PROJECT_ID`: Your Browserbase project ID
- `OPENAI_API_KEY`: Your OpenAI API key

4. Start the development server:
```bash
pnpm run dev
```

## Deployment

This project is optimized for Render deployment:

1. Fork this repository
2. Create a new Web Service on Render
3. Connect your forked repository
4. Set your environment variables in Render dashboard
5. Deploy!

### Why Render?

Render is ideal for browser automation because:
- 100-minute request timeout limit (1h40m)
- Automatic HTTPS
- Zero-downtime deploys
- Built-in auto-scaling
- DDoS protection

## Project Structure

```
/
├── src/
│   ├── index.ts           # Main Express server with Stagehand
│   └── stagehand.config.ts # Stagehand configuration
├── .env.example          # Example environment variables
├── package.json         # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── render.yaml        # Render deployment configuration
```

## Pricing

1) [Hosting on Render](https://render.com/pricing) - Free for Hobby tier
2) [AI Model to help get the right data/elements from pages](https://openai.com/api/pricing/) - Stagehand supports the following models:
   - gpt-4
   - gpt-4-2024-08-06
   - gpt-4-mini
   - gpt-preview
   - gpt-4-mini (not recommended)
   - claude-3-5-sonnet-latest
   - claude-3-5-sonnet-20240210
   - claude-3-5-sonnet-20241022
3) [Browserbase](https://www.browserbase.com/#pricing)

## API Endpoints

### GET /test

Runs the browser automation demo and returns the extracted data.

## Important Notes

This app uses browser automation in a server environment. Consider:

1. **Cold Starts**: First request might be slower due to browser initialization
2. **Memory Usage**: Browser automation can be memory intensive
3. **Request Timeouts**: Render has a 100-minute (1h40m) timeout limit per request
4. **Scaling**: Render automatically scales instances based on demand
