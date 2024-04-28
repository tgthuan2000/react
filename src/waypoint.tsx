import type { FC } from 'react';
import { Fragment } from 'react';
import { Waypoint as ReactWaypoint } from 'react-waypoint';

export type WaypointProps = {
  className?: string;
  trigger?: boolean | undefined;
  isFetching?: boolean;
  fetchFnc?: (args: ReactWaypoint.CallbackArgs) => void;
};

const Waypoint: FC<WaypointProps> = (props) => {
  const { trigger, className, isFetching, fetchFnc } = props;

  if (!trigger) {
    return null;
  }

  return (
    <Fragment>
      {isFetching ? (
        <div className={className}>Loading...</div>
      ) : (
        <ReactWaypoint onEnter={fetchFnc} bottomOffset='-20%' />
      )}
    </Fragment>
  );
};

export default Waypoint;
