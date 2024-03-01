import { MenuItems } from "@/app/SideBar/MenuItems";
import CollapsibleMenuItem from "@/common/components/SideBarExpansible/Delivery/components/CollapsibleMenuItem";
import LinkMenuItem from "@/common/components/SideBarExpansible/Delivery/components/LinkMenuItem";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment } from "react";
import SimpleBar from "simplebar-react";

const MobileMenuContent: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="sticky top-0 z-40 bg-gray-0/10 pr-6 pb-5 pt-5 2xl:px-8 2xl:pt-6 dark:bg-gray-100/5">
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="text-gray-800 hover:text-gray-900"
        >
          <Image
            src="/Logotipo_Wipay_transparent.png"
            alt="logo"
            className="logo-desktop"
            width={155}
            height={39}
          />
        </Link>
      </div>

      <SimpleBar className="h-[calc(100%-80px)]">
        <div className="mt-4 pb-3 3xl:mt-6">
          {MenuItems.map((item, index) => {
            // const isActive = pathname === (item?.href as string);
            // const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
            //   (dropdownItem) => dropdownItem.href === pathname,
            // );
            // const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

            return (
              <Fragment key={item.name + "-" + index}>
                <h5
                  className={`mb-2 truncate pr-6 text-xs font-medium uppercase tracking-widest text-gray-500 2xl:px-8 dark:text-gray-500 ${index !== 0 && "mt-6 3xl:mt-7"}`}
                >
                  {item.name}
                </h5>

                {item.menuItems.map((subItem) => (
                  <>
                    {subItem.href ? (
                      <LinkMenuItem item={subItem} />
                    ) : (
                      <CollapsibleMenuItem item={subItem} />
                    )}
                  </>
                ))}
              </Fragment>
            );
          })}
        </div>
      </SimpleBar>
    </>
  );
};

export default MobileMenuContent;
