// EmotionalAssessment Flow: AI-powered emotional assessment through conversation to identify a student's mental state.
'use server';
/**
 * @fileOverview Implements the emotional assessment flow for MindBloom, an AI mental health assistant.
 *
 * - emotionalAssessment - A function that initiates the emotional assessment process.
 * - EmotionalAssessmentInput - The input type for the emotionalAssessment function.
 * - EmotionalAssessmentOutput - The return type for the emotionalAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EmotionalAssessmentInputSchema = z.object({
  conversation: z
    .string()
    .describe('The conversation between the student and the AI.'),
});
export type EmotionalAssessmentInput = z.infer<typeof EmotionalAssessmentInputSchema>;

const EmotionalAssessmentOutputSchema = z.object({
  emotionalState: z.string().describe('The emotional state of the student.'),
  summary: z.string().describe('A summary of the conversation.'),
});
export type EmotionalAssessmentOutput = z.infer<typeof EmotionalAssessmentOutputSchema>;

export async function emotionalAssessment(input: EmotionalAssessmentInput): Promise<EmotionalAssessmentOutput> {
  return emotionalAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'emotionalAssessmentPrompt',
  input: {schema: EmotionalAssessmentInputSchema},
  output: {schema: EmotionalAssessmentOutputSchema},
  prompt: `Analyze the following conversation and identify the student's emotional state. Provide a summary of the conversation and the identified emotional state.

Conversation: {{{conversation}}}

Respond in JSON format with the identified emotional state and a brief summary of the conversation.`,
});

const emotionalAssessmentFlow = ai.defineFlow(
  {
    name: 'emotionalAssessmentFlow',
    inputSchema: EmotionalAssessmentInputSchema,
    outputSchema: EmotionalAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
