import { sync } from 'fumadocs-core/search/orama-cloud';
import * as fs from 'node:fs/promises';
import { CloudManager } from '@oramacloud/client';

export async function updateSearchIndexes() {
  const apiKey = process.env.ORAMA_CLOUD_PRIVATE_API_KEY;
  const index = process.env.ORAMA_INDEX_NAME;

  if (!apiKey) {
    console.log('no api key for Orama found, skipping');
    return;
  }

  const content = await fs.readFile('.next/server/app/static.json.body');
  const records = JSON.parse(content.toString());

  const manager = new CloudManager({ api_key: apiKey });

  await sync(manager, {
    index,
    documents: records,
  });

  console.log(`search updated: ${records.length} records`);
}

void updateSearchIndexes();
