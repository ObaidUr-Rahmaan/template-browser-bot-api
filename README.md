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

## API Endpoints

### GET /test

Runs the browser automation demo and returns the extracted data.

## Important Notes

This app uses browser automation in a server environment. Consider:

1. **Cold Starts**: First request might be slower due to browser initialization
2. **Memory Usage**: Browser automation can be memory intensive
3. **Request Timeouts**: Render has a 100-minute (1h40m) timeout limit per request
4. **Scaling**: Render automatically scales instances based on demand
