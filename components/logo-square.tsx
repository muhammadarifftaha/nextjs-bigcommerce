import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div className={clsx('flex h-full flex-none items-center justify-center bg-neutral-950 p-4')}>
      <LogoIcon
        className={clsx({
          'h-[20px] w-[20px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      />
    </div>
  );
}
