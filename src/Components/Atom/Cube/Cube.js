import "./styles.css";
import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Cube = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const rotateX = useTransform(y, (value) => value);
    const rotateY = useTransform(x, (value) => value);

    const handleDrag = (event, info) => {
        // Negate delta y to reverse direction
        const delta = { x: info.delta.x, y: -info.delta.y };

        // Update motion values with negated delta
        x.set(x.get() + delta.x);
        y.set(y.get() + delta.y);

        // Get cube bounds
        const bounds = ref.current.getBoundingClientRect();

        // Check if cube is out of bounds
        if (
            bounds.left < 0 ||
            bounds.right > window.innerWidth ||
            bounds.top < 0 ||
            bounds.bottom > window.innerHeight
        ) {
            setIsDragging(false);
            // Reset cube position to within bounds
            x.set(Math.max(0, Math.min(x.get(), window.innerWidth - bounds.width)));
            y.set(Math.max(0, Math.min(y.get(), window.innerHeight - bounds.height)));
        } else {
            setIsDragging(true);
        }
    };

    return (
        <div className="Cubee d-flex justify-content-center" >
            <div className="container_Cube m-auto">
                <motion.div
                    className={`cube${isDragging ? " is-dragging" : ""}`}
                    ref={ref}
                    drag
                    dragConstraints={{
                        left: -1,
                        right: 1,
                        top: -1,
                        bottom: 1
                    }}
                    onDrag={handleDrag}
                    style={{
                        rotateX,
                        rotateY
                    }}
                >
                    <motion.div className="side front d-flex justify-content-center " >
                        <p className="pCube" >About</p>
                    </motion.div>
                    <motion.div className="side left d-flex justify-content-center" >
                        <p className="pCube">Home</p>
                    </motion.div>
                    <motion.div className="side right d-flex justify-content-center"  >
                        <p className="pCube">Theraphy</p>
                    </motion.div>
                    <motion.div className="side top "  >
                    </motion.div>
                    <motion.div className="side bottom " >
                    </motion.div> <motion.div className="side back d-flex justify-content-center"  >
                        <p className="pCube">Products</p>
                    </motion.div>
                    <motion.div />
                    <motion.div />
                    <motion.div />
                    <motion.div />
                    <motion.div />
                </motion.div>
            </div>
        </div >
    );
};

export default Cube;
