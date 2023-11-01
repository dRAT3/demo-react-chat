import { Message, SystemResponse, useRuntime } from '@voiceflow/react-chat';

export interface CalendlyMessageProps extends React.ComponentProps<(typeof SystemResponse)['SystemMessage']> {
  url: string;
  runtime: ReturnType<typeof useRuntime>;
}

export const CalendlyMessage: React.FC<CalendlyMessageProps> = ({ url, runtime, ...props }) => {
  
  // Event listeners for Calendly can be set up here
  // For example, onEventScheduled and onProfilePageViewed
  
  return (
    <SystemResponse.SystemMessage {...props}>
      <Message from="system">
        <iframe 
          height="100%" 
          width="100%" 
          title="calendly" 
          src="https://calendly.com/ruben-phone-fr/aiflux" 
          frameborder="0"
        />
      </Message>
    </SystemResponse.SystemMessage>
  );
};
