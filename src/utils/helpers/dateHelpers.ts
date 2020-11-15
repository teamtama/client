import dayjs, { ConfigType, OpUnitType, QUnitType } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);

export const fromNow = (date: string | Date): string => {
  return dayjs(date).fromNow();
};

export const localized = (date: string | Date): string => {
  return dayjs(date).format('L LT');
};

export const cleanDate = (date: string | Date): string => {
  return dayjs(date).format('YYYY. MM. DD  hh:mm:ss');
};

export const cleanDateYearMonthDay = (date: string | Date): string => {
  return dayjs(date).format('YYYY. MM. DD');
};

interface ICheckFromNow {
  date: ConfigType;
  unit?: QUnitType | OpUnitType;
  float?: boolean;
  howLong: number;
}

export const checkFromNow = ({
  date,
  unit,
  float,
  howLong,
}: ICheckFromNow): boolean => {
  const diff = dayjs(new Date()).diff(date, unit, float);
  return diff < howLong;
};
