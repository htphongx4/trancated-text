import { useEffect, useRef, useState } from "react";

export const Trancated = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isTextTruncated, setIsTextTramcated] = useState(false);

  function isTruncated(node: Element) {
    const truncated = node.scrollHeight > node.clientHeight;
    node.classList.toggle("truncated", truncated);
    setIsTextTramcated(truncated);
  }

  // observe resize
  const resizeObserver = new ResizeObserver((m) => isTruncated(m[0].target));

  useEffect(() => {
    if (!ref.current) return;
    resizeObserver.observe(ref.current);
  }, []);

  const onShowMore = () => {
    ref.current?.classList.toggle("line-clamp");
  };

  return (
    <>
      {isTextTruncated ? "Truncated" : "Not Truncated"}
      <div id="truncatedContainer" className="box">
        {isTextTruncated && (
          <div className="show-more">
            <span style={{ color: "black" }}>...</span>
            <span onClick={onShowMore}>Show More</span>
          </div>
        )}

        <span ref={ref} className="text line-clamp">
          {text}
        </span>
      </div>
    </>
  );
};
