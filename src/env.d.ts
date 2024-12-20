/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
	readonly OPENAI_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
