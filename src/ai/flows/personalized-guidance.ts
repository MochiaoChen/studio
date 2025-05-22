'use server';

/**
 * @fileOverview Personalized guidance flow that provides supportive responses based on student's input and emotional state, using established psychological theories.
 *
 * - providePersonalizedGuidance - A function that handles the personalized guidance process.
 * - PersonalizedGuidanceInput - The input type for the providePersonalizedGuidance function.
 * - PersonalizedGuidanceOutput - The return type for the providePersonalizedGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedGuidanceInputSchema = z.object({
  userInput: z.string().describe('The user input describing their current situation or feelings.'),
  emotionalState: z.string().describe('The identified emotional state of the user.'),
});
export type PersonalizedGuidanceInput = z.infer<typeof PersonalizedGuidanceInputSchema>;

const PersonalizedGuidanceOutputSchema = z.object({
  guidance: z.string().describe('Personalized guidance and supportive response based on the user input and emotional state.'),
});
export type PersonalizedGuidanceOutput = z.infer<typeof PersonalizedGuidanceOutputSchema>;

export async function providePersonalizedGuidance(input: PersonalizedGuidanceInput): Promise<PersonalizedGuidanceOutput> {
  return personalizedGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGuidancePrompt',
  input: {schema: PersonalizedGuidanceInputSchema},
  output: {schema: PersonalizedGuidanceOutputSchema},
  prompt: `You are a mental health assistant for university students. You will provide personalized guidance and supportive responses based on the student's input and emotional state, using established psychological theories. The goal is to offer relevant and helpful advice to help them cope with their challenges and promote their mental well-being.

User Input: {{{userInput}}}
Emotional State: {{{emotionalState}}}

Guidance:`,
});

const personalizedGuidanceFlow = ai.defineFlow(
  {
    name: 'personalizedGuidanceFlow',
    inputSchema: PersonalizedGuidanceInputSchema,
    outputSchema: PersonalizedGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
