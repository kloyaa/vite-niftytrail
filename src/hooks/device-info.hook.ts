import { useState, useEffect } from 'react';
import { isMobile, isTablet, isBrowser, osVersion, deviceType, osName,  } from 'react-device-detect';

interface IDeviceInfo {
  deviceType: string;
  model: string;
  modelVersion: string;
  os: string;
  osVersion: string;
  manufacturer: string;
}

export const useDeviceInfo = (): IDeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState({
    deviceType: "unknown",
    model: "unknown",
    modelVersion: osVersion,
    os: osName,
    osVersion: osVersion,
    manufacturer: "unknown"
  });

  useEffect(() => {
    const getDeviceInfo = () => {
      const device = {
        deviceType: deviceType,
        model: "unknown",
        modelVersion: osVersion,
        os: osName,
        osVersion: osVersion,
        manufacturer: "unknown"
      };

      if (isMobile) {
        device.deviceType = "Phone";
      } else if (isTablet) {
        device.deviceType = "Tablet";
      } else if (isBrowser) {
        device.deviceType = "Desktop";
      }

      return device;
    };

    setDeviceInfo(getDeviceInfo());
  }, []);

  return deviceInfo;
};