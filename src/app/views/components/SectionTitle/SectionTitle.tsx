import { FC, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  orderNumber: number;
}

export const SectionTitle: FC<Props> = (props: Props) => {
  const { children, orderNumber } = props;
  return (
    <div className="text-2xl md:text-3xl lg:text-5xl lg:grid lg:grid-cols-4 py-3 lg:py-4m lg:border-y border-border">
      <h2 className="text-primary px-4">{orderNumber}.0</h2>
      <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-px w-full lg:hidden my-2"></div>
      <div className="lg:col-span-3 px-4 lg:pl-0">
        <h2 className="text-primary">{children}</h2>
      </div>
    </div>
  );
};
