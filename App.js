// import 'react-native-gesture-handler'
import { Suspense } from 'react';
import { Experience, SkipLogo } from './components';
import { SensorType, useAnimatedSensor } from 'react-native-reanimated';

export default function App() {
  const { sensor } = useAnimatedSensor(SensorType.GYROSCOPE, { interval: 100 });

  return (
    <Experience>
      <Suspense fallback={null}>
        <SkipLogo sensor={sensor} />
      </Suspense>
    </Experience>
  );
}