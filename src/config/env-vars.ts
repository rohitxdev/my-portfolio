import { z } from 'zod';

const environmentVariablesSchema = z.object({
	API_URL: z.string().nonempty().url(),
	IS_PWA_ENABLED: z.boolean(),
});

export const ENV_VARS = environmentVariablesSchema.parse({
	API_URL: import.meta.env.VITE_API_URL,
	IS_PWA_ENABLED: import.meta.env.VITE_IS_PWA_ENABLED === 'true' ? true : false,
});

export type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;
