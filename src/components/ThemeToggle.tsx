
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  // Default to light mode
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    // Use saved theme or set to light as default
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    
    // Apply theme to document
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
    // Toggle dark class on html element
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <ToggleGroup type="single" value={theme} onValueChange={(value) => value && toggleTheme(value as "light" | "dark")}>
        <ToggleGroupItem value="light" aria-label="Light mode" className="px-3">
          <Sun size={16} className="mr-1" />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark mode" className="px-3">
          <Moon size={16} className="mr-1" />
          Dark
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
