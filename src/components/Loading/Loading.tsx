import { Loader, Segment, Dimmer } from 'semantic-ui-react';

function Loading() {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  );
}

export default Loading;