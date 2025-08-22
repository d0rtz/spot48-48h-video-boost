import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileStickyBar = () => {
  const isMobile = useIsMobile();

  const handleStickyClick = () => {
    window.open("https://docs.google.com/forms/d/YOUR_FORM_ID/viewform?embedded=true", "_blank");
  };

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4">
      <Button 
        variant="cta" 
        size="lg" 
        className="w-full animate-pulse-glow"
        onClick={handleStickyClick}
      >
        Solicita información
      </Button>
    </div>
  );
};

export default MobileStickyBar;