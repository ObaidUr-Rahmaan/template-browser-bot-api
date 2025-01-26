# Template Browser Automation Agent

A template browser automation service built with Express.js and Stagehand.

Create your own browser agent to crawl the web, extract data, and perform actions on your behalf.

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

This project is optimized for Railway deployment:

1. Click the Deploy button below:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/YOUR_TEMPLATE_HERE)

2. Set your environment variables in Railway dashboard
3. That's it! Railway handles everything else

Note: Railway's free tier includes $5 credit monthly which is plenty for development/testing.

### Why Not Vercel?

While Vercel is great for many applications, it's not suitable for browser automation due to:
- Hobby tier: 30s execution limit
- Pro tier: 60s execution limit
- Enterprise tier: 900s (15 min) limit

Browser automation often requires longer execution times. Railway has no execution time limits, making it ideal for this use case.

## Project Structure

```
/
├── src/
│   ├── index.ts           # Main Express server with Stagehand
│   └── stagehand.config.ts # Stagehand configuration
├── .env.example          # Example environment variables
├── package.json         # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── railway.toml       # Railway deployment configuration
```

## API Endpoints

### GET /test

Runs the browser automation demo and returns the extracted data.

## Important Notes

This app uses browser automation in a serverless environment. Consider:

1. **Cold Starts**: First request might be slower due to browser initialization
2. **Execution Limits**: Vercel has a 10s timeout for hobby plans
3. **Memory Usage**: Browser automation can be memory intensive
4. **Scaling**: Vercel will automatically scale based on demand
