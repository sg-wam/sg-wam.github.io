import type { CSSProperties } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

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

const libero = [
  ["Spatial", 99.4],
  ["Object", 99.8],
  ["Goal", 98.6],
  ["Long", 96.2],
] as const;

const liberoPlus = [
  ["Camera", 58.6],
  ["Robot", 48.9],
  ["Language", 81.4],
  ["Light", 89.8],
  ["Background", 86.1],
  ["Noise", 80.7],
  ["Layout", 74.2],
] as const;

const bibliography = `@misc{zhao2027sgwam,
  title  = {SG-WAM: Self-Guided World Modeling in
            Geometry-Aware Policy Space},
  author = {Zhao, Ruiteng and Zhang, Zhengshen and Su, Yue
            and Wang, Wenshuo and Li, Jiahui and Yang, Zhiyuan
            and Tay, Francis E. H. and Ang, Jr., Marcelo H.
            and Zhu, Haiyue},
  year   = {2027}
}`;

function MetricBar({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className={`metric-bar${accent ? " metric-bar--accent" : ""}`}>
      <div className="metric-bar__label">
        <span>{label}</span>
        <strong>{value.toFixed(1)}</strong>
      </div>
      <div
        className="metric-bar__track"
        style={{ "--bar-value": `${value}%` } as CSSProperties}
      >
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SG-WAM home">
          <span className="wordmark__mark">SG</span>
          <span>WAM</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#method">Method</a>
          <a href="#results">Results</a>
          <a href="#citation">Citation</a>
        </nav>
        <a className="header-paper" href={assetPath("/sg-wam-paper.pdf")}>
          Paper <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">
              Vision–Language–Action <span>·</span> World Action Modeling
            </p>
            <h1>
              Model the future
              <span>where actions are made.</span>
            </h1>
            <p className="hero__deck">
              <strong>SG-WAM</strong> learns action-conditioned dynamics
              directly in the policy’s own representation space—then grounds
              that space in geometry.
            </p>

            <div className="authors" aria-label="Authors">
              {authors.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>

            <div className="hero__actions">
              <a
                className="button button--dark"
                href={assetPath("/sg-wam-paper.pdf")}
              >
                Read the paper <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--ghost" href="#method">
                Explore the method <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="policy-space" aria-label="Abstract visualization of policy-space dynamics">
            <div className="policy-space__topline">
              <span>POLICY SPACE / t</span>
              <span>t + Δ</span>
            </div>
            <div className="policy-space__field">
              <div className="geometry-plane geometry-plane--one" />
              <div className="geometry-plane geometry-plane--two" />
              <div className="trajectory" />
              {Array.from({ length: 8 }, (_, index) => (
                <span
                  className={`dynamics-token dynamics-token--${index + 1}`}
                  key={index}
                >
                  q{index + 1}
                </span>
              ))}
              <span className="state-label state-label--current">
                current state
              </span>
              <span className="state-label state-label--future">
                predicted future
              </span>
              <div className="action-sequence">
                <span>a₁</span>
                <span>a₂</span>
                <span>a₃</span>
                <span>…</span>
                <span>a₈</span>
              </div>
            </div>
            <div className="policy-space__caption">
              <span>Geometry-aware context</span>
              <span className="live-dot">Action-conditioned transition</span>
            </div>
          </div>
        </section>

        <section className="scoreboard" aria-label="Headline results">
          <div>
            <strong>98.5<span>%</span></strong>
            <p>LIBERO average success</p>
          </div>
          <div>
            <strong>73.0<span>%</span></strong>
            <p>LIBERO-Plus zero-shot</p>
          </div>
          <div>
            <strong>0.9<span>B</span></strong>
            <p>Total parameters</p>
          </div>
          <div className="scoreboard__statement">
            <span>Trained without</span>
            <strong>large-scale embodied pretraining</strong>
          </div>
        </section>

        <section className="section problem" id="overview">
          <div className="section-heading">
            <p className="section-index">01 / The question</p>
            <h2>World modeling, in the space that acts.</h2>
          </div>
          <div className="problem__body">
            <p className="lead">
              A useful world model must understand <em>what</em> changes,{" "}
              <em>where</em> it changes, and <em>how</em> that change informs
              the next action.
            </p>
            <p>
              Existing WAMs typically optimize one side of this problem:
              observation-space targets preserve rich perception at high
              modeling cost, while auxiliary latent targets can drift away from
              the representations actually used to act.
            </p>
          </div>

          <div className="comparison-grid">
            <article>
              <span className="comparison-grid__type">A / Explicit</span>
              <h3>Observation space</h3>
              <p>
                Dense perceptual supervision, but capacity is spent modeling
                texture, lighting, and viewpoint.
              </p>
              <span className="status status--warm">Perceptually heavy</span>
            </article>
            <article>
              <span className="comparison-grid__type">B / Implicit</span>
              <h3>Auxiliary latent space</h3>
              <p>
                Compact prediction targets, but they may not evolve with the
                policy that generates actions.
              </p>
              <span className="status status--cool">Policy mismatch</span>
            </article>
            <article className="comparison-grid__answer">
              <span className="comparison-grid__type">C / SG-WAM</span>
              <h3>Policy-derived space</h3>
              <p>
                Action-relevant by construction and spatially grounded through
                geometric supervision.
              </p>
              <span className="status status--bright">Aligned + grounded</span>
            </article>
          </div>

          <figure className="paper-figure">
            <Image
              src={assetPath("/comparison.png")}
              width={1800}
              height={988}
              alt="Conceptual comparison between explicit and auxiliary latent world modeling and SG-WAM's policy-space approach"
            />
            <figcaption>
              <span>Figure 01 · Concept</span>
              SG-WAM learns action-conditioned latent dynamics inside a shared,
              geometry-aware policy representation.
              <a href={assetPath("/comparison.pdf")}>Original figure ↗</a>
            </figcaption>
          </figure>
        </section>

        <section className="method" id="method">
          <div className="method__intro">
            <p className="section-index section-index--light">
              02 / The method
            </p>
            <h2>A self-guided world model.</h2>
            <p>
              Future prediction, geometric grounding, and action generation
              organize one shared policy representation—end to end.
            </p>
          </div>

          <div className="pipeline" aria-label="SG-WAM method pipeline">
            <article>
              <span>01</span>
              <div className="pipeline__glyph glyph-observation">
                <i />
                <i />
                <i />
              </div>
              <h3>Observe</h3>
              <p>Multi-view images + language</p>
            </article>
            <div className="pipeline__arrow" aria-hidden="true">→</div>
            <article>
              <span>02</span>
              <div className="pipeline__glyph glyph-tokens">
                {Array.from({ length: 8 }, (_, index) => <i key={index} />)}
              </div>
              <h3>Represent</h3>
              <p>Eight learnable dynamics tokens</p>
            </article>
            <div className="pipeline__arrow" aria-hidden="true">→</div>
            <article>
              <span>03</span>
              <div className="pipeline__glyph glyph-action">
                <i />
                <i />
                <i />
                <i />
              </div>
              <h3>Condition</h3>
              <p>Eight-step intervening actions</p>
            </article>
            <div className="pipeline__arrow" aria-hidden="true">→</div>
            <article>
              <span>04</span>
              <div className="pipeline__glyph glyph-predict">
                <i>t</i>
                <b>Δ</b>
                <i>t+</i>
              </div>
              <h3>Predict</h3>
              <p>Self-Guided World Predictor</p>
            </article>
            <div className="pipeline__arrow" aria-hidden="true">→</div>
            <article>
              <span>05</span>
              <div className="pipeline__glyph glyph-act">
                <i />
              </div>
              <h3>Act</h3>
              <p>Flow-matching action expert</p>
            </article>
          </div>

          <div className="method-cards">
            <article>
              <span className="method-card__number">8</span>
              <div>
                <h3>Dynamics tokens</h3>
                <p>
                  Compact policy-native tokens gather visual and linguistic
                  context, then carry action-relevant scene dynamics.
                </p>
              </div>
            </article>
            <article>
              <span className="method-card__number">EMA</span>
              <div>
                <h3>Self-guided targets</h3>
                <p>
                  A slowly evolving copy of the same policy supplies stable
                  future targets in the representation family used to act.
                </p>
              </div>
            </article>
            <article>
              <span className="method-card__number">3D</span>
              <div>
                <h3>Geometric grounding</h3>
                <p>
                  A frozen VGGT teacher shapes policy image tokens with
                  manipulation-relevant spatial structure during training.
                </p>
              </div>
            </article>
          </div>

          <div className="training-note">
            <div>
              <p className="training-note__label">TRAIN TOGETHER</p>
              <p>
                L<sub>action</sub> + 0.1 L<sub>geometry</sub> + 0.1 L
                <sub>prediction</sub>
              </p>
            </div>
            <div>
              <p className="training-note__label">DEPLOY LIGHT</p>
              <p>
                Geometry teacher, SGWP, and EMA target pathway are removed at
                inference.
              </p>
            </div>
            <a href={assetPath("/sg-wam-overview.pdf")}>
              View full framework <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section results" id="results">
          <div className="section-heading">
            <p className="section-index">03 / The evidence</p>
            <h2>Small model. Strong signal.</h2>
          </div>
          <div className="results__summary">
            <p className="lead">
              SG-WAM reaches the top reported average on LIBERO while using a
              0.9B model—and leads LIBERO-Plus zero-shot transfer overall.
            </p>
          </div>

          <div className="benchmark-grid">
            <article className="benchmark benchmark--libero">
              <header>
                <div>
                  <span className="benchmark__tag">In-distribution</span>
                  <h3>LIBERO</h3>
                </div>
                <strong>98.5<span>%</span></strong>
              </header>
              <div className="benchmark__bars">
                {libero.map(([label, value]) => (
                  <MetricBar key={label} label={label} value={value} />
                ))}
              </div>
              <p className="benchmark__note">
                Jointly trained once across Spatial, Object, Goal, and Long.
              </p>
            </article>

            <article className="benchmark benchmark--plus">
              <header>
                <div>
                  <span className="benchmark__tag">Zero-shot transfer</span>
                  <h3>LIBERO-Plus</h3>
                </div>
                <strong>73.0<span>%</span></strong>
              </header>
              <div className="benchmark__bars benchmark__bars--compact">
                {liberoPlus.map(([label, value]) => (
                  <MetricBar
                    key={label}
                    label={label}
                    value={value}
                    accent={value >= 80}
                  />
                ))}
              </div>
              <p className="benchmark__note">
                The same checkpoint. No fine-tuning or test-time adaptation.
              </p>
            </article>
          </div>

          <div className="result-callouts">
            <article>
              <span>↑</span>
              <strong>Best overall</strong>
              <p>on LIBERO-Plus across seven distribution shifts.</p>
            </article>
            <article>
              <span>×</span>
              <strong>No extra embodied data</strong>
              <p>despite competing with models up to 7B parameters.</p>
            </article>
            <article>
              <span>8</span>
              <strong>Tokens hit the sweet spot</strong>
              <p>raising LIBERO-Long from 90.2 to 96.2 versus one token.</p>
            </article>
          </div>
        </section>

        <section className="real-world">
          <div className="real-world__heading">
            <p className="section-index">04 / Beyond the benchmark</p>
            <h2>Robust where the world gets messy.</h2>
            <p>
              The same policy is evaluated on a UR5e under background, lighting,
              and novel-object shifts—without additional demonstrations,
              fine-tuning, or adaptation.
            </p>
          </div>

          <div className="task-grid">
            <article className="task-card task-card--orange">
              <header>
                <span>01</span>
                <span>3D reasoning</span>
              </header>
              <h3>Pick &amp; Place</h3>
              <p>
                Retrieve a cube from a drawer, clear a barrier, and place it in
                a bowl.
              </p>
              <div className="task-card__scores">
                <span><strong>75%</strong> ID</span>
                <span><strong>60%</strong> Light</span>
                <span><strong>55%</strong> Background</span>
                <span><strong>40%</strong> Novel object</span>
              </div>
            </article>
            <article className="task-card task-card--blue">
              <header>
                <span>02</span>
                <span>Deformable object</span>
              </header>
              <h3>Towel Folding</h3>
              <p>
                Track changing cloth geometry through two precise,
                state-dependent folds.
              </p>
              <div className="task-card__scores">
                <span><strong>45%</strong> ID</span>
                <span><strong>35%</strong> Light</span>
                <span><strong>25%</strong> Background</span>
                <span><strong>25%</strong> Novel object</span>
              </div>
            </article>
            <article className="task-card task-card--green">
              <header>
                <span>03</span>
                <span>Long horizon</span>
              </header>
              <h3>Toolbox Organization</h3>
              <p>
                Sequence a screwdriver and two gears into a toolbox, then close
                it.
              </p>
              <div className="task-card__hero-score">
                <strong>50%</strong>
                <span>ID success</span>
              </div>
              <p className="task-card__baseline">VPP 30% · VLA-JEPA 20%</p>
            </article>
          </div>

          <div className="figure-links">
            <a href={assetPath("/realworld-setup.pdf")}>
              Real-world setup &amp; tasks <span aria-hidden="true">↗</span>
            </a>
            <a href={assetPath("/ood-settings.pdf")}>
              OOD evaluation settings <span aria-hidden="true">↗</span>
            </a>
            <a href={assetPath("/attention-map.pdf")}>
              Geometry attention maps <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="ablation">
          <div className="ablation__copy">
            <p className="section-index section-index--light">
              05 / What matters
            </p>
            <h2>Grounding and prediction are complementary.</h2>
            <p>
              World modeling delivers the larger gain; geometric supervision
              structures the space it predicts into. Together, they improve
              average success by 3.2 points over the base model.
            </p>
            <blockquote>
              Removing world modeling cuts LIBERO-Long from{" "}
              <strong>96.2</strong> to <strong>92.2</strong>.
            </blockquote>
          </div>
          <div className="ablation__chart">
            {[
              ["Base policy", "No Geo. · No WM.", 95.3],
              ["Geometry only", "Geo. · No WM.", 96.6],
              ["World model only", "No Geo. · WM.", 97.6],
              ["Full SG-WAM", "Geo. · WM.", 98.5],
            ].map(([label, detail, value], index) => (
              <div
                className={`ablation-row${index === 3 ? " ablation-row--full" : ""}`}
                key={String(label)}
              >
                <div>
                  <strong>{label}</strong>
                  <span>{detail}</span>
                </div>
                <div
                  className="ablation-row__bar"
                  style={{ "--ablation": `${Number(value) - 90}%` } as CSSProperties}
                >
                  <span />
                </div>
                <strong>{Number(value).toFixed(1)}</strong>
              </div>
            ))}
            <p>LIBERO average success rate (%) · axis begins at 90</p>
          </div>
        </section>

        <section className="section abstract-section">
          <div className="section-heading">
            <p className="section-index">06 / Abstract</p>
            <h2>The paper, in brief.</h2>
          </div>
          <div className="abstract-grid">
            <blockquote>
              “Predict future dynamics in the same geometry-aware
              representation space used to act.”
            </blockquote>
            <div className="abstract-text">
              <p>
                World Action Models (WAMs) couple action generation with
                prediction of future states. Their effectiveness depends on
                whether future dynamics are modeled in a space that is both
                aligned with action generation and sufficiently geometry-aware
                to capture where and how actions change the scene. Existing
                WAMs typically satisfy only part of this requirement, relying
                on either perceptually heavy observation-space targets or
                auxiliary latent spaces that are not jointly structured for
                action relevance and geometry.
              </p>
              <p>
                We propose SG-WAM, a self-guided framework that learns
                geometry-aware action-conditioned dynamics directly in the
                policy-derived representation space. SG-WAM introduces
                learnable dynamics tokens and a Self-Guided World Predictor
                that forecasts their future latent states conditioned on
                intervening robot actions. Prediction targets are generated by
                an exponential moving average copy of the same policy backbone,
                providing stable supervision within the representation family
                used by the action expert.
              </p>
              <p>
                Geometric supervision further structures the policy image-token
                representations, yielding a future-alignment space that is both
                action-relevant and geometry-aware. Latent future prediction,
                geometric grounding, and flow-matching action generation are
                jointly optimized end-to-end. Built on a 0.9B model without
                large-scale embodied pretraining, SG-WAM achieves 98.5% average
                success on LIBERO and 73% on LIBERO-Plus, while outperforming
                strong baselines in both in-distribution and out-of-distribution
                real-world evaluations.
              </p>
            </div>
          </div>
        </section>

        <section className="citation" id="citation">
          <div className="citation__intro">
            <p className="section-index section-index--light">
              07 / Resources
            </p>
            <h2>Read. Cite. Build on it.</h2>
            <p>
              Explore the full manuscript for architecture details,
              experimental protocols, and complete ablations.
            </p>
            <a
              className="button button--light"
              href={assetPath("/sg-wam-paper.pdf")}
            >
              Download paper <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="citation__bib">
            <div className="citation__bib-header">
              <span>BIBTEX</span>
              <span>MANUSCRIPT</span>
            </div>
            <pre><code>{bibliography}</code></pre>
          </div>
        </section>
      </div>

      <footer>
        <a className="wordmark wordmark--footer" href="#top">
          <span className="wordmark__mark">SG</span>
          <span>WAM</span>
        </a>
        <p>Self-Guided World Modeling in Geometry-Aware Policy Space</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
