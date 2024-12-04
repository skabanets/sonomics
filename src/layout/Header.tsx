import { Button, Logo, NavMenu, ThemeToggle } from "../components";

export const Header = () => {
  return (
    <header className="pt-[40px]">
      <div className="container flex items-center">
        <nav className="flex w-full justify-between">
          <Logo applyThemeColor />
          <div className="flex items-center gap-[50px]">
            <ThemeToggle />
            <NavMenu className="flex gap-[50px] font-medium text-mainTextColor transition" />
            <Button label="Contact us" />
          </div>
        </nav>
      </div>
    </header>
  );
};
