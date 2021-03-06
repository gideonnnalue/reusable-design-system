const ChevronDownIcon = () => {
  return (
    <svg width="10px" height="6px" viewBox="0 0 10 6">
      <title>icon</title>
      <defs>
        <filter color-interpolation-filters="auto" id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0.431373 0 0 0 0 0.454902 0 0 0 0 0.572549 0 0 0 1.000000 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Design-System-Challenge"
          transform="translate(-1254.000000, -1591.000000)"
        >
          <g
            id="icon"
            transform="translate(1251.000000, 1586.000000)"
            filter="url(#filter-1)"
          >
            <g transform="translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000) ">
              <rect id="bounding-box" x="0" y="0" width="16" height="16"></rect>
              <polyline
                id="path"
                stroke="#6E7492"
                points="3.5 6 8 10 12.5 6"
              ></polyline>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ChevronDownIcon;
