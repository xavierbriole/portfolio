import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/lib/useTheme";

interface SparklesProps {
  children: React.ReactNode;
}

export default function Sparkles({ children }: SparklesProps) {
  const { isDark, isHydrated } = useTheme();

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute -inset-x-96 -inset-y-32 flex items-center justify-center">
          <div className="relative h-64 w-[1200px]">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={400}
              className="h-full w-full"
              particleColor={isDark ? "#ffffff" : "#6366f1"}
            />
            {isHydrated && (
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse 600px 200px at center, transparent 0%, transparent 30%, ${isDark ? "#000000" : "#f9fafb"} 70%, ${isDark ? "#000000" : "#f9fafb"} 100%)`,
                }}
              />
            )}
          </div>
        </div>

        {children}

        <div className="relative z-10 mt-4 flex w-full justify-center">
          <div className="relative h-8">
            <div className="absolute top-0 left-1/2 h-[2px] w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute top-0 left-1/2 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute top-0 left-1/2 h-[5px] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
