import { CustomMessage } from '../custom-message.enum';
import { Trace } from './types';

export const CalendlyTrace: Trace = {
  canHandle: ({ type }) => type === 'calendly',
  handle: ({ context }, trace) => {
    context.messages.push({ type: CustomMessage.CALENDLY, payload: JSON.parse(trace.payload) });
    return context;
  },
};
