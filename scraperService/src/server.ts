import express, { Request, Response } from 'express';
import cors from 'cors';
import {scrapeWebsite} from "./scraper";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors()); // Allow all origins to access

app.get('/scrape', async (req: Request, res: Response): Promise<void> => {
    const { url, selectors } = req.query;

    if (!url) {
        res.status(400).json({ error: "URL parameter is required" });
    }

    if (!selectors) {
        res.status(400).json({ error: "At least one CSS selector is required" });
    }

    // Ensure selectors is an array
    const selectorList = Array.isArray(selectors) ? selectors : [selectors];

    const result = await scrapeWebsite(url, selectorList);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
