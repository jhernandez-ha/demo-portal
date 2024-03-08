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
      className={`menu-expansible-container ${isExpanded && "menu-expanded"}`}
    >
      <SimpleBar className="simplebar-menu-expansible">
        <p className="menu-expansible-title">{selectedMenu?.title}</p>
        <div className="menu-expansible-link-container">
          {selectedMenu?.menuItems.map((menu) => (
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
