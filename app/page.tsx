import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const authors = [
  ["Ruiteng Zhao", "https://openreview.net/profile?id=~Ruiteng_Zhao1"],
  ["Zhengshen Zhang", "https://openreview.net/profile?id=~Zhengshen_Zhang1"],
  ["Yue Su", "https://openreview.net/profile?id=~Yue_Su1"],
  ["Wenshuo Wang", "https://openreview.net/profile?id=~Wenshuo_Wang8"],
  ["Jiahui Li", "https://openreview.net/profile?id=~Jiahui_Li10"],
  ["Zhiyuan Yang", "https://openreview.net/profile?id=~Zhiyuan_Yang6"],
  ["Francis E. H. Tay", "https://openreview.net/profile?id=~Francis_E._H._Tay1"],
  ["Marcelo H. Ang Jr", "https://openreview.net/profile?id=~Marcelo_H_Ang_Jr1"],
  ["Haiyue Zhu", "https://openreview.net/profile?id=~Haiyue_Zhu1"],
] as const;

const bibtex = `@misc{zhao2027sgwam,
  title  = {SG-WAM: Self-Guided World Modeling in
            Geometry-Aware Policy Space},
  author = {Zhao, Ruiteng and Zhang, Zhengshen and Su, Yue
            and Wang, Wenshuo and Li, Jiahui and Yang, Zhiyuan
            and Tay, Francis E. H. and Ang, Jr., Marcelo H.
            and Zhu, Haiyue},
  year   = {2027}
}`;

const realWorldTasks = [
  {
    title: "Pick and Place",
    image: "/pick-place.png",
    imageHeight: 384,
    settings: [
      ["ID", 35, 30, 75],
      ["Background", 20, 15, 55],
      ["Light Change", 25, 10, 60],
      ["Novel Object", 20, 10, 40],
    ],
  },
  {
    title: "Towel Folding",
    image: "/towel-folding.png",
    imageHeight: 387,
    settings: [
      ["ID", 20, 35, 45],
      ["Background", 10, 15, 25],
      ["Light Change", 10, 15, 35],
      ["Novel Object", 15, 10, 25],
    ],
  },
  {
    title: "Toolbox Organization",
    image: "/toolbox-organization.png",
    imageHeight: 384,
    settings: [["ID", 20, 30, 50]],
  },
] as const;

function TaskResultCard({ task }: { task: (typeof realWorldTasks)[number] }) {
  return (
    <article className="task-result-card">
      <div className="task-result-card__visual">
        <Image
          src={asset(task.image)}
          width={1278}
          height={task.imageHeight}
          alt={`${task.title} real-world experiment sequence`}
        />
      </div>
      <div className="task-result-card__results">
        <h4>{task.title}</h4>
        <div className="bar-legend">
          <span className="legend-jepa">VLA-JEPA</span>
          <span className="legend-vpp">VPP</span>
          <span className="legend-sgwam">SG-WAM</span>
        </div>
        {task.settings.map(([setting, jepa, vpp, sgwam]) => (
          <div className="condition" key={setting}>
            <span className="condition__name">{setting}</span>
            <div className="model-bar model-bar--jepa">
              <i style={{ width: `${jepa}%` }} />
              <span>{jepa}%</span>
            </div>
            <div className="model-bar model-bar--vpp">
              <i style={{ width: `${vpp}%` }} />
              <span>{vpp}%</span>
            </div>
            <div className="model-bar model-bar--sgwam">
              <i style={{ width: `${sgwam}%` }} />
              <strong>{sgwam}%</strong>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">SG-WAM</a>
        <nav aria-label="Page sections">
          <a href="#abstract">Abstract</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#citation">Citation</a>
        </nav>
      </header>

      <article>
        <section className="hero" id="top">
          <p className="venue">Research Project Page</p>
          <h1>SG-WAM: Self-Guided World Modeling in Geometry-Aware Policy Space</h1>
          <div className="authors" aria-label="Authors">
            {authors.map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>
            ))}
          </div>
          <div className="links" id="paper">
            <a href="#paper-note">Paper</a>
            <a href="#paper-note">Code</a>
          </div>
          <p className="link-note" id="paper-note">Paper and code links will be added upon release.</p>
        </section>

        <figure className="teaser">
          <Image
            src={asset("/comparison.png")}
            width={1800}
            height={988}
            priority
            alt="Comparison of observation-space, auxiliary latent-space, and SG-WAM policy-space world modeling"
          />
          <figcaption>
            SG-WAM predicts action-conditioned future dynamics directly in a
            geometry-aware representation shared with the policy.
          </figcaption>
        </figure>

        <section className="section" id="abstract">
          <h2>Abstract</h2>
          <p>
            World Action Models (WAMs) couple action generation with prediction
            of future states. Their effectiveness depends on whether future
            dynamics are modeled in a space that is both aligned with action
            generation and sufficiently geometry-aware to capture where and how
            actions change the scene. Existing WAMs typically satisfy only part
            of this requirement, relying on either perceptually heavy
            observation-space targets or auxiliary latent spaces that are not
            jointly structured for action relevance and geometry.
          </p>
          <p>
            We propose SG-WAM, a self-guided framework that learns
            geometry-aware action-conditioned dynamics directly in the
            policy-derived representation space. SG-WAM introduces learnable
            dynamics tokens and a Self-Guided World Predictor that forecasts
            their future latent states conditioned on intervening robot actions.
            Prediction targets are generated by an exponential moving average
            copy of the same policy backbone, providing stable supervision
            within the representation family used by the action expert.
          </p>
          <p>
            Geometric supervision further structures the policy image-token
            representations. Latent future prediction, geometric grounding, and
            flow-matching action generation are jointly optimized end-to-end.
            Built on a 0.9B model without large-scale embodied pretraining,
            SG-WAM achieves 98.5% average success on LIBERO and 73% on
            LIBERO-Plus, while outperforming strong baselines in both
            in-distribution and out-of-distribution real-world evaluations.
          </p>
        </section>

        <section className="section" id="method">
          <h2>Method</h2>
          <p className="section-lead">
            SG-WAM unifies latent future prediction, geometric grounding, and
            action generation in the policy representation space.
          </p>
          <figure className="embedded-figure embedded-figure--method">
            <Image
              src={asset("/sg-wam-overview.png")}
              width={1836}
              height={810}
              alt="SG-WAM framework overview"
            />
            <figcaption>
              Overview of SG-WAM. The model predicts action-conditioned future
              dynamics in the geometry-aware policy representation space.
            </figcaption>
          </figure>
          <div className="method-grid">
            <div>
              <h3>Policy-derived dynamics</h3>
              <p>Learnable dynamics tokens collect policy-relevant context and model how the scene evolves under action.</p>
            </div>
            <div>
              <h3>Self-guided prediction</h3>
              <p>An EMA copy of the policy supplies stable future targets in the same representation family used to act.</p>
            </div>
            <div>
              <h3>Geometric grounding</h3>
              <p>Geometric supervision gives policy image tokens spatial structure without adding inference-time cost.</p>
            </div>
          </div>
        </section>

        <section className="section" id="results">
          <h2>Results</h2>
          <p className="section-lead">
            A 0.9B SG-WAM model achieves strong in-distribution performance and
            robust zero-shot transfer without large-scale embodied pretraining.
          </p>
          <div className="result-summary">
            <div><strong>98.5%</strong><span>LIBERO average success</span></div>
            <div><strong>73.0%</strong><span>LIBERO-Plus zero-shot</span></div>
            <div><strong>0.9B</strong><span>model parameters</span></div>
          </div>

          <h3 className="table-title">LIBERO</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Spatial</th><th>Object</th><th>Goal</th><th>Long</th><th>Average</th></tr></thead>
              <tbody><tr><td>99.4</td><td>99.8</td><td>98.6</td><td>96.2</td><td><strong>98.5</strong></td></tr></tbody>
            </table>
          </div>

          <h3 className="table-title">LIBERO-Plus</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Camera</th><th>Robot</th><th>Language</th><th>Light</th><th>Background</th><th>Noise</th><th>Layout</th><th>Average</th></tr></thead>
              <tbody><tr><td>58.6</td><td>48.9</td><td>81.4</td><td>89.8</td><td>86.1</td><td>80.7</td><td>74.2</td><td><strong>73.0</strong></td></tr></tbody>
            </table>
          </div>

          <h3 className="table-title table-title--major">Real-world evaluation</h3>
          <p className="table-note">
            Success rates under different visual perturbations. SG-WAM is shown
            in blue.
          </p>
          <div className="task-result-list">
            {realWorldTasks.map((task) => (
              <TaskResultCard key={task.title} task={task} />
            ))}
          </div>

          <div className="experiment-figures">
            <h3>Out-of-distribution settings</h3>
            <figure className="embedded-figure embedded-figure--compact">
              <Image
                src={asset("/ood-settings.png")}
                width={1449}
                height={345}
                alt="Out-of-distribution evaluation settings"
              />
              <figcaption>Evaluation settings for distribution shifts.</figcaption>
            </figure>

            <h3>Geometry attention</h3>
            <figure className="embedded-figure embedded-figure--compact">
              <Image
                src={asset("/attention-map.png")}
                width={1086}
                height={684}
                alt="Geometry attention map visualization"
              />
              <figcaption>Visualization of geometry-aware attention.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section citation" id="citation">
          <h2>Citation</h2>
          <pre><code>{bibtex}</code></pre>
        </section>
      </article>

      <footer><p>SG-WAM · Self-Guided World Modeling in Geometry-Aware Policy Space</p></footer>
    </main>
  );
}
