// "use client";
//
// import React from "react";
// import { cn } from "@/lib/utils";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Menu, ChevronRight } from "lucide-react";
// import { MENU_ITEMS } from "@/constants";
//
// const MobileNav = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [expandedSubmenu, setExpandedSubmenu] = React.useState("");
//
//   const handleSubmenuClick = (name: string) => {
//     setExpandedSubmenu(expandedSubmenu === name ? "" : name);
//   };
//
//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetTrigger asChild>
//         <button
//           type="button"
//           className={cn(
//             "inline-flex items-center justify-center rounded-md p-2",
//             "text-muted-foreground hover:bg-secondary hover:text-foreground",
//             "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary",
//           )}
//         >
//           <Menu className="h-6 w-6" />
//         </button>
//       </SheetTrigger>
//       <SheetContent side="right" className="w-full max-w-sm p-0">
//         <div className="flex flex-col">
//           <div className="border-b p-4">
//             <div className="h-8 w-8 rounded-full bg-primary"></div>
//           </div>
//           <div className="flex-1 overflow-y-auto">
//             <Accordion type="single" collapsible>
//               {MENU_ITEMS.map((item) => (
//                 <AccordionItem key={item.title} value={item.title}>
//                   <AccordionTrigger className="px-4">
//                     {item.title}
//                   </AccordionTrigger>
//                   <AccordionContent>
//                     <div className="space-y-2 px-4">
//                       {item.subItems.map((subItem) => (
//                         <div key={subItem.name} className="rounded-lg border">
//                           <button
//                             onClick={() => handleSubmenuClick(subItem.name)}
//                             className="flex w-full items-center justify-between p-3 text-left"
//                           >
//                             <div>
//                               <div className="font-medium">{subItem.name}</div>
//                               <p className="text-sm text-muted-foreground">
//                                 {subItem.description}
//                               </p>
//                             </div>
//                             {subItem.children && (
//                               <ChevronRight
//                                 className={cn(
//                                   "h-4 w-4 transition-transform",
//                                   expandedSubmenu === subItem.name &&
//                                     "rotate-90",
//                                 )}
//                               />
//                             )}
//                           </button>
//
//                           {subItem.children &&
//                             expandedSubmenu === subItem.name && (
//                               <div className="border-t bg-secondary/50">
//                                 {subItem.children.map((child) => (
//                                   <div
//                                     key={child.name}
//                                     className="border-b p-3 last:border-b-0"
//                                   >
//                                     <div className="mb-2 font-medium">
//                                       {child.name}
//                                     </div>
//                                     <ul className="space-y-1">
//                                       {child.items.map((item) => (
//                                         <li key={item}>
//                                           <button className="w-full rounded px-2 py-1 text-left text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
//                                             {item}
//                                           </button>
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   </div>
//                                 ))}
//                               </div>
//                             )}
//                         </div>
//                       ))}
//                     </div>
//                   </AccordionContent>
//                 </AccordionItem>
//               ))}
//             </Accordion>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };
//
// export default MobileNav;
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { type MainMenuItem, type SubMenuItem } from "@/types";

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = React.useState<string>("");

  const handleSubmenuClick = (title: string) => {
    setExpandedSubmenu(expandedSubmenu === title ? "" : title);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm p-0">
        <div className="flex flex-col">
          <div className="border-b p-4">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Accordion type="single" collapsible className="space-y-1">
              {NAV_ITEMS.map((item: MainMenuItem) => (
                <AccordionItem
                  key={item.title}
                  value={item.title}
                  className="border-0 px-4"
                >
                  {item.subMenuItems ? (
                    <>
                      <AccordionTrigger className="text-md rounded-md bg-none px-4 py-3 font-semibold text-primary no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="pb-1 pt-1">
                        <div className="space-y-2">
                          {item.subMenuItems.map((subItem: SubMenuItem) => (
                            <div
                              key={subItem.title}
                              className="overflow-hidden rounded-md border bg-card"
                            >
                              <div className="flex flex-col">
                                <Link
                                  href={subItem.href}
                                  className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "h-auto justify-start p-3 text-left",
                                  )}
                                  // className="h-auto justify-start p-3 text-left"
                                >
                                  <div className="flex w-full items-center justify-between">
                                    <div>
                                      <div className="text-md font-semibold text-primary">
                                        {subItem.title}
                                      </div>
                                      <p className="line-clamp-1 text-sm text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    </div>
                                    {subItem.children && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handleSubmenuClick(subItem.title);
                                        }}
                                      >
                                        <ChevronRight
                                          className={cn(
                                            "h-4 w-4 transition-transform",
                                            expandedSubmenu === subItem.title &&
                                              "rotate-90",
                                          )}
                                        />
                                      </Button>
                                    )}
                                  </div>
                                </Link>

                                {subItem.children &&
                                  expandedSubmenu === subItem.title && (
                                    <div className="border-t bg-muted/50">
                                      {subItem.children.map((child) => (
                                        <Link
                                          key={child.title}
                                          href={child.href}
                                          className={cn(
                                            buttonVariants({
                                              variant: "ghost",
                                            }),
                                            "h-auto w-full justify-start border-b p-3 text-sm font-medium last:border-0",
                                          )}
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <span className="font-semibold text-primary">
                                            {child.title}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "text-md h-auto w-full justify-start py-3 font-medium text-primary",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-semibold">{item.title}</span>
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
