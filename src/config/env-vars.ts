import { z } from 'zod';

const environmentVariablesSchema = z.object({
	IS_PWA_ENABLED: z.boolean(),
});

export const ENV_VARS = environmentVariablesSchema.parse({
	IS_PWA_ENABLED: import.meta.env.VITE_IS_PWA_ENABLED === 'true' ? true : false,
});

if (import.meta.env.MODE === 'development') {
	console.table(ENV_VARS);
}

export type EnvironmentVariables = z.infer<typeof environmentVariablesSchema>;
