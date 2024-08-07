"use client";

import { openSignInDialog } from "@/components/auth/SignInDialog";
import { ThemeIcon, SignInIcon } from "@/components/common/icons";
import { useAuth } from "@/hooks/useAuth";
import { ThemesWithLabel } from "@/theme/themes";
import { useState, useRef, useEffect } from "react";
import { ProfileMenu } from "./ProfileMenu";

export const NavButtons = () => {
    const { user, loading } = useAuth();

    const themeChanged = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
    };

    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const themeMenuRef = useRef<HTMLLIElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            themeMenuRef.current &&
            !themeMenuRef.current.contains(event.target as Node)
        ) {
            setIsThemeMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <ul className="menu menu-horizontal">
            <li className="justify-around" ref={themeMenuRef}>
                <details
                    open={isThemeMenuOpen}
                    onToggle={(e) => setIsThemeMenuOpen(e.currentTarget.open)}
                >
                    <summary>
                        <ThemeIcon />
                        <span className="hidden lg:inline">Theme</span>
                    </summary>
                    <ul className="bg-base-100  p-2">
                        {ThemesWithLabel.map((theme) => (
                            <li key={theme.value}>
                                <button
                                    data-set-theme={theme.value}
                                    data-act-class="ACTIVECLASS"
                                    onClick={(event) => {
                                        themeChanged(theme.value);
                                        setIsThemeMenuOpen(false);
                                    }}
                                >
                                    {theme.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            {loading ? (
                <span className="loading loading-bars loading-sm"></span>
            ) : user != null ? (
                <ProfileMenu />
            ) : (
                <li>
                    <button className="btn btn-ghost" onClick={openSignInDialog}>
                        <SignInIcon />
                        <span className="hidden lg:inline">Sign in</span>
                    </button>
                </li>
            )}
        </ul>
    );
};
