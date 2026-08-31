"use client"

import { motion } from "framer-motion"

const clients = [
  {
    name: "TFS Finserv",
    logo: "/works/logo1.png",
  },
  {
    name: "Atluri Events",
    logo: "/works/logo2.png",
  },
  {
    name: "Akepatimart",
    logo: "/works/logo3.png",
  },
  {
    name: "Wonderkids",
    logo: "/works/logo4.png",
  },
  {
    name: "ROFERO",
    logo: "/works/logo5.png",
  },
  {
    name: "SaaS King",
    logo: "/works/logo2.png",
  },
  {
    name: "Bujji Gadu Biryani",
    logo: "/clients/image.png",
  },
]

// Four copies = seamless continuous movement
const marqueeClients = [
  ...clients,
  ...clients,
  ...clients,
  ...clients,
]

export function LogoCarousel() {
  return (
    <section
      id="clients"
      className="
        relative
        overflow-hidden
        border-y border-zinc-200
        bg-white
        py-7
        md:py-8
      "
    >

      {/* =========================================
          HEADING
      ========================================== */}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-40 mb-6 text-center"
      >
        <p
          className="
            text-[10px]
            md:text-[11px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-zinc-500
          "
        >
          Brands we work with
        </p>
      </motion.div>


      {/* =========================================
          MARQUEE CONTAINER
      ========================================== */}

      <div className="relative h-[76px] overflow-hidden">

        {/* =========================================
            MOVING CLIENT LOGOS
        ========================================== */}

        <div className="absolute inset-0 flex items-center">

          <div className="flex w-max items-center animate-sybarites-marquee">

            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="
                  flex
                  h-[56px]
                  min-w-[165px]
                  md:min-w-[205px]
                  flex-shrink-0
                  items-center
                  justify-center
                  px-3
                  md:px-5
                "
              >

                {/* CLIENT PILL */}

                <div
                  className="
                    flex
                    h-[48px]
                    min-w-[135px]
                    md:min-w-[175px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-zinc-200
                    bg-white
                    px-5
                    md:px-7
                  "
                >

                  <img
                    src={client.logo}
                    alt={client.name}
                    className="
                      h-8
                      md:h-10
                      w-auto
                      max-w-[155px]
                      md:max-w-[185px]
                      object-contain
                    "
                  />

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* =========================================
            FIXED CENTER SYBARITES FRAME
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-50
            h-[78px]
            w-[350px]
            md:w-[410px]
            -translate-x-1/2
            -translate-y-1/2
          "
        >

          {/* =====================================
              LEFT BRACKET
          ====================================== */}

          <div
            className="
              absolute
              left-[34px]
              md:left-[42px]
              top-[2px]
              bottom-[2px]
              w-px
              bg-zinc-400
            "
          />

          {/* LEFT TOP CURVE */}

          <div
            className="
              absolute
              left-[34px]
              md:left-[42px]
              top-[2px]
              h-[12px]
              w-[12px]
              border-l
              border-b
              border-zinc-400
              rounded-bl-[10px]
            "
          />

          {/* LEFT BOTTOM CURVE */}

          <div
            className="
              absolute
              left-[34px]
              md:left-[42px]
              bottom-[2px]
              h-[12px]
              w-[12px]
              border-l
              border-t
              border-zinc-400
              rounded-tl-[10px]
            "
          />


          {/* =====================================
              RIGHT BRACKET
          ====================================== */}

          <div
            className="
              absolute
              right-[34px]
              md:right-[42px]
              top-[2px]
              bottom-[2px]
              w-px
              bg-zinc-400
            "
          />

          {/* RIGHT TOP CURVE */}

          <div
            className="
              absolute
              right-[34px]
              md:right-[42px]
              top-[2px]
              h-[12px]
              w-[12px]
              border-r
              border-b
              border-zinc-400
              rounded-br-[10px]
            "
          />

          {/* RIGHT BOTTOM CURVE */}

          <div
            className="
              absolute
              right-[34px]
              md:right-[42px]
              bottom-[2px]
              h-[12px]
              w-[12px]
              border-r
              border-t
              border-zinc-400
              rounded-tr-[10px]
            "
          />


          {/* =====================================
              BLACK SYBARITES PANEL
          ====================================== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[58px]
              w-[260px]
              md:w-[290px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-[7px]
              bg-[#151515]
            "
          >

            <span
              className="
                whitespace-nowrap
                text-[15px]
                md:text-[18px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-zinc-300
              "
            >
              SYBARITES
            </span>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM BORDER
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-zinc-200
        "
      />

    </section>
  )
}

export { LogoCarousel as Case1 }