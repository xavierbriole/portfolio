import { cn, normalizeUrl } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  pathname: string;
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  pathname: string;
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-10 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible &&
          "border border-white/50 bg-white/2.5 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm dark:border-white/20 dark:bg-black/2.5 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  pathname,
  className,
  onItemClick,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => {
        const normalizedPathname = normalizeUrl(pathname);
        const normalizedItemLink = normalizeUrl(item.link);
        const isActive =
          normalizedPathname === normalizedItemLink ||
          (normalizedItemLink !== "/" &&
            normalizedPathname.startsWith(normalizedItemLink));

        return (
          <a
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={cn(
              "relative rounded-full px-4 py-2 text-gray-500 transition-all duration-200 dark:text-neutral-300",
            )}
            key={`link-${idx}`}
            href={item.link}
          >
            {(hovered === idx || (isActive && hovered === null)) && (
              <motion.div
                layoutId="glass-effect"
                className="absolute inset-0 h-full w-full rounded-full border border-white/50 bg-white/2.5 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm dark:border-white/20 dark:bg-black/2.5 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: "9999px",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible &&
          "border border-white/50 bg-white/2.5 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm dark:border-white/20 dark:bg-black/2.5 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className={cn(
            "fixed right-6 bottom-20 z-50 flex w-64 flex-col items-start justify-start gap-4 rounded-2xl border border-white/50 bg-white/2.5 px-6 py-6 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm dark:border-white/20 dark:bg-black/2.5 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      aria-pressed={isOpen}
      aria-label="Toggle menu"
      onClick={onClick}
      className="group z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/2.5 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-200 lg:hidden dark:border-white/20 dark:bg-black/2.5 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]"
    >
      <span className="sr-only">Toggle menu</span>
      <svg
        className="pointer-events-none h-6 w-6 fill-current"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={cn(
            "origin-center translate-x-[7px] -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
            isOpen && "translate-x-0 translate-y-0 rotate-[315deg]",
          )}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={cn(
            "origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]",
            isOpen && "rotate-45",
          )}
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={cn(
            "origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]",
            isOpen && "translate-y-0 rotate-[135deg]",
          )}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </button>
  );
};

export const NavbarLogo = ({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href || undefined}
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      {children}
    </a>
  );
};

export const MobileNavItems = ({
  items,
  pathname,
  onItemClick,
}: MobileNavItemsProps) => {
  return items.map((item, idx) => {
    const normalizedPathname = normalizeUrl(pathname);
    const normalizedItemLink = normalizeUrl(item.link);
    const isActive =
      normalizedPathname === normalizedItemLink ||
      (normalizedItemLink !== "/" &&
        normalizedPathname.startsWith(normalizedItemLink));

    return (
      <a
        key={`mobile-link-${idx}`}
        href={item.link}
        onClick={onItemClick}
        className="relative cursor-pointer rounded-full border border-white/50 bg-white/2.5 px-4 py-2 text-sm font-medium text-gray-500 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all duration-200 dark:border-white/20 dark:bg-black/2.5 dark:text-neutral-300 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)]"
      >
        <span className="block">{item.name}</span>
      </a>
    );
  });
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  isMobile = false,
  children,
  className,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  isMobile?: boolean;
  children: React.ReactNode;
  className?: string;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const styles = isMobile
    ? "px-4 py-2 rounded-full border border-white/50 bg-white/2.5 text-gray-500 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] transition-all duration-200 dark:border-white/20 dark:bg-black/2.5 dark:text-neutral-300 dark:shadow-[inset_0_1px_0px_rgba(255,255,255,0.3),0_0_9px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.3)] text-sm font-medium relative cursor-pointer inline-block text-center"
    : "px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 border border-gray-200 hover:border-gray-300 dark:bg-black dark:text-white dark:hover:bg-gray-700 dark:border-gray-800 dark:hover:border-gray-700 text-sm font-bold relative cursor-pointer transition-colors duration-300 inline-block text-center";

  return (
    <Tag href={href || undefined} className={cn(styles, className)} {...props}>
      {children}
    </Tag>
  );
};
