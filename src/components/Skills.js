
import React, { useEffect, useRef, useState } from "react";
import { Line } from "rc-progress";
import {
  SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiTypescript,
  SiLaravel, SiNodedotjs, SiDotnet, SiSpringboot,
  SiMysql, SiPostgresql, SiMicrosoftsqlserver,SiAuth0, SiFirebase, SiDocker,SiAngular,
  SiRender, SiVercel, SiGit, SiGithub, SiHostinger
} from "react-icons/si";
import colorSharp from "../assets/img/color-sharp.png";

const SKILLS = {
  Frontend: [
    { name: "React", value: 90, icon: SiReact, color: "#61DAFB" },
    { name: "Angular", value: 80, icon: SiAngular, color: "#DD0031" },       
    { name: "HTML", value: 90, icon: SiHtml5, color: "#E34F26" },
    { name: "CSS / Tailwind", value: 85, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript / TypeScript", value: 85, icon: SiTypescript, color: "#3178C6" },
  ],
  Backend: [
    { name: "Spring Boot", value: 85, icon: SiSpringboot, color: "#6DB33F" }, 
    { name: "Laravel (PHP)", value: 80, icon: SiLaravel, color: "#FF2D20" },
    { name: "Node.js / Express", value: 70, icon: SiNodedotjs, color: "#339933" },
    { name: "ASP.NET Core", value: 65, icon: SiDotnet, color: "#512BD4" },
    
  ],
  "Data y Auth": [
    { name: "SQL (MySQL/PostgreSQL/SQL Server)", value: 75, icon: SiPostgresql, color: "#4169E1" },
    { name: "JWT / Auth", value: 80, icon: SiAuth0, color: "#EB5424" },    
  ],
  DevOps: [
    { name: "Docker", value: 65, icon: SiDocker, color: "#2496ED" },
    { name: "Render / Vercel", value: 70, icon: SiRender, color: "#46E3B7" },
    { name: "Git / GitHub", value: 85, icon: SiGit, color: "#F05032" },
    { name: "Firebase", value: 70, icon: SiFirebase, color: "#FFCA28" },     
    { name: "Hostinger", value: 70, icon: SiHostinger, color: "#673DE6" },  
  ],
};

function useInViewportOnce() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p className="mb-4">
                Experiencia en frontend y backend para construir apps completas, optimizadas y escalables.
              </p>

              <div className="row gy-4">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <div key={group} className="col-12 col-md-6">
                    <h5 className="skill-group">{group}</h5>
                    <div className="d-flex flex-column gap-3">
                      {items.map(({ name, value, icon: Icon, color }) => (
                        <div key={name} className="skill-row">
                          <div className="d-flex justify-content-between align-items-end mb-1">
                            <span className="skill-name d-inline-flex align-items-center gap-2">
                              <span className="skill-icon" style={{ color }}>
                                <Icon size={18} />
                              </span>
                              {name}
                            </span>
                            <span className="skill-val">{value}%</span>
                          </div>

                          <Line
                            percent={value}
                            strokeWidth={8}
                            trailWidth={8}
                            strokeLinecap="round"
                            strokeColor="#7C3AED"            
                            trailColor="rgba(255,255,255,0.08)"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};