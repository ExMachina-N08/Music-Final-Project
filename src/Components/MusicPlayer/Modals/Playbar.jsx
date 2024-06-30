import React from "react";
import { motion } from "framer-motion";
import "./playBar.css";
const Playbar = () => {
  return (
    <>
      <div className="play">
        <div className="album">this is album</div>
        <div className="playSet" style={{ paddingLeft: 40 }}>
          this is play set
        </div>
        <div className="volume">this is volume</div>
      </div>
    </>
    // <motion.div
    //   layout
    //   data-isOpen={isOpen}
    //   initial={{ borderRadius: 30 }}
    //   className="parent"
    //   onClick={() => setIsOpen(!isOpen)}
    // >
    //   <motion.div layout className="child" />
    // </motion.div>
  );
};

export default Playbar;
