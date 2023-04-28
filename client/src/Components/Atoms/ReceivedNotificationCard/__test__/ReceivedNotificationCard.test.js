import { cleanup, render } from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import ReceivedNotificationCard from '../ReceivedNotificationCard';

afterEach(cleanup);

test('Rendering Test ReceivedNotification', () => {
  const { getByTestId } = render(
    <ReceivedNotificationCard id="test-receivedNotification" />
  );
  expect(getByTestId('test-receivedNotification')).toHaveTextContent(
    'receivedNotification'
  );
});

test('Snapshot Test ReceivedNotification', () => {
  const notificationJson = TestRenderer.create().toJSON();
  expect(notificationJson).toMatchSnapshot();
});
