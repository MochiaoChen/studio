
'use server';

/**
 * @fileOverview Personalized guidance flow that provides supportive responses based on student's input, emotional state, and conversation history, using established psychological theories.
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
  conversationHistory: z.string().describe('The full conversation history for context, with each message prefixed by "User:" or "AI:".'),
});
export type PersonalizedGuidanceInput = z.infer<typeof PersonalizedGuidanceInputSchema>;

const PersonalizedGuidanceOutputSchema = z.object({
  guidance: z.string().describe('Personalized guidance and supportive response based on the user input, emotional state, and conversation history. May include a follow-up question.'),
});
export type PersonalizedGuidanceOutput = z.infer<typeof PersonalizedGuidanceOutputSchema>;

export async function providePersonalizedGuidance(input: PersonalizedGuidanceInput): Promise<PersonalizedGuidanceOutput> {
  return personalizedGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedGuidancePrompt',
  input: {schema: PersonalizedGuidanceInputSchema},
  output: {schema: PersonalizedGuidanceOutputSchema},
  prompt: `You are MindBridge, a friendly and empathetic mental health assistant for university students. Your goal is to provide personalized guidance and supportive responses based on the student's current input and their identified emotional state. Use established psychological theories to offer relevant and helpful advice. Engage the student in a supportive conversation.

The student's identified emotional state is: {{{emotionalState}}}.
The current message from the student is: "{{{userInput}}}"

Here is the recent conversation history for context (User messages are prefixed with 'User:', your (AI) messages are prefixed with 'AI:'):
{{{conversationHistory}}}

Based on the user's input and emotional state, provide a supportive and helpful response. If appropriate, end your response with a gentle, open-ended follow-up question to encourage further dialogue or to check if the guidance resonates. Avoid asking a question if the user's input seems to be a concluding remark or if they express a clear need to end the conversation. Your entire response should be contained within the 'guidance' field.`,
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
