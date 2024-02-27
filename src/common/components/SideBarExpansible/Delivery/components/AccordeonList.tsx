import { FC, useMemo } from "react";
import Link from "next/link";
import { AccordeonListProps } from "../interface";

const AccordeonList: FC<AccordeonListProps> = ({ subMenuItems }) => {
  const List = useMemo(() => {
    return subMenuItems?.map((item, index) => {
      return (
        <Link
          href={item?.href}
          key={item?.name + index}
          className={
            "ml-3.5 mb-0.5 flex items-center justify-between rounded-md pl-3.5 py-2 font-medium capitalize duration-200 last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5 text-primary"
          }
        >
          <div className="flex items-center truncate">
            <span
              className={
                "me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current bg-primary text-primary ring-[1px] ring-black punto-lista"
              }
            />
            <span className="truncate">{item?.name}</span>
          </div>
        </Link>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return List;
};

export default AccordeonList;
