import { FC, Fragment } from "react";
import SimpleBar from "simplebar-react";
import LinkMenuItem from "./components/LinkMenuItem";
import CollapsibleMenuItem from "./components/CollapsibleMenuItem";
import { LeftSideExpandibleProps } from "./interface";

const LeftSideExpandible: FC<LeftSideExpandibleProps> = ({
  isExpanded,
  selectedMenu,
}) => {
  return (
    <div
      className={`fixed start-[116px] top-[91px] z-50 hidden h-full w-0 overflow-x-hidden duration-200 xl:flex ${!!isExpanded && "w-[220px]"}`}
    >
      <SimpleBar className="h-[calc(100vh_-_100px)] min-w-[220px] pe-2.5">
        <p className="mb-3 font-lexend text-xs font-normal uppercase tracking-widest text-gray-500">
          {selectedMenu.title}
        </p>
        <div className="flex flex-col gap-2">
          {selectedMenu.menuItems.map((menu) => (
            <Fragment key={menu.name}>
              {menu.href ? (
                <LinkMenuItem item={menu} />
              ) : (
                <CollapsibleMenuItem item={menu} />
              )}
            </Fragment>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
};

export default LeftSideExpandible;
