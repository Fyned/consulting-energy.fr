import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'))
const Contact = lazy(() => import('@/pages/Contact'))
const ConsultingEnergy = lazy(() => import('@/pages/ConsultingEnergy'))

// Solutions
const Solutions = lazy(() => import('@/pages/solutions'))
const SolutionsBureauEtudes = lazy(() => import('@/pages/solutions/BureauEtudes'))
const SolutionsITE = lazy(() => import('@/pages/solutions/ITE'))
const SolutionsITI = lazy(() => import('@/pages/solutions/ITI'))
const SolutionsChauffage = lazy(() => import('@/pages/solutions/Chauffage'))
const SolutionsEclairageLED = lazy(() => import('@/pages/solutions/EclairageLED'))
const SolutionsDesembouage = lazy(() => import('@/pages/solutions/Desembouage'))
const SolutionsDestratificateur = lazy(() => import('@/pages/solutions/Destratificateur'))
const SolutionsRecuperateurChaleur = lazy(() => import('@/pages/solutions/RecuperateurChaleur'))
const SolutionsPhotovoltaique = lazy(() => import('@/pages/solutions/Photovoltaique'))
const SolutionsVMC = lazy(() => import('@/pages/solutions/VMC'))

// Obligations
const DecretTertiaire = lazy(() => import('@/pages/obligations/DecretTertiaire'))
const DecretBACS = lazy(() => import('@/pages/obligations/DecretBACS'))
const AuditEnergetique = lazy(() => import('@/pages/obligations/AuditEnergetique'))

// Expertises
const Expertises = lazy(() => import('@/pages/expertises'))
const BureauEtudes = lazy(() => import('@/pages/expertises/BureauEtudes'))
const MaitriseOeuvre = lazy(() => import('@/pages/expertises/MaitriseOeuvre'))
const FinancementCEE = lazy(() => import('@/pages/expertises/FinancementCEE'))
const AccompagnementOPERAT = lazy(() => import('@/pages/expertises/AccompagnementOPERAT'))

// Secteurs
const Tertiaire = lazy(() => import('@/pages/secteurs/Tertiaire'))
const Industrie = lazy(() => import('@/pages/secteurs/Industrie'))
const Collectivites = lazy(() => import('@/pages/secteurs/Collectivites'))
const LogementCollectif = lazy(() => import('@/pages/secteurs/LogementCollectif'))
const Agricole = lazy(() => import('@/pages/secteurs/Agricole'))

// Ressources
const Blog = lazy(() => import('@/pages/ressources/Blog'))
const BlogArticle = lazy(() => import('@/pages/ressources/BlogArticle'))
const Guides = lazy(() => import('@/pages/ressources/Guides'))
const Calendrier = lazy(() => import('@/pages/ressources/Calendrier'))

// Guide Detail Pages
const GuideDecretTertiaire = lazy(() => import('@/pages/ressources/guides/GuideDecretTertiaire'))
const GuideDecretBACS = lazy(() => import('@/pages/ressources/guides/GuideDecretBACS'))
const GuideOPERAT = lazy(() => import('@/pages/ressources/guides/GuideOPERAT'))
const GuideCEE = lazy(() => import('@/pages/ressources/guides/GuideCEE'))
const GuideAuditChecklist = lazy(() => import('@/pages/ressources/guides/GuideAuditChecklist'))
const GuidePlanActions = lazy(() => import('@/pages/ressources/guides/GuidePlanActions'))

// About
const APropos = lazy(() => import('@/pages/about/APropos'))

// Legal
const MentionsLegales = lazy(() => import('@/pages/legal/MentionsLegales'))
const Confidentialite = lazy(() => import('@/pages/legal/Confidentialite'))

// Placeholder page component for pages not yet implemented
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#2D3436] mb-4">{title}</h1>
        <p className="text-[#636e72]">Cette page sera bientôt disponible.</p>
      </div>
    </div>
  )
}

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-[#1B4332] border-t-transparent rounded-full" />
    </div>
  )
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Consulting Energy */}
          <Route path="/consulting-energy" element={<ConsultingEnergy />} />

          {/* Solutions */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/bureau-etudes" element={<SolutionsBureauEtudes />} />
          <Route path="/solutions/ite" element={<SolutionsITE />} />
          <Route path="/solutions/iti" element={<SolutionsITI />} />
          <Route path="/solutions/chauffage" element={<SolutionsChauffage />} />
          <Route path="/solutions/eclairage-led" element={<SolutionsEclairageLED />} />
          <Route path="/solutions/desembouage" element={<SolutionsDesembouage />} />
          <Route path="/solutions/destratificateur" element={<SolutionsDestratificateur />} />
          <Route path="/solutions/recuperateur-chaleur" element={<SolutionsRecuperateurChaleur />} />
          <Route path="/solutions/photovoltaique" element={<SolutionsPhotovoltaique />} />
          <Route path="/solutions/vmc" element={<SolutionsVMC />} />

          {/* Obligations */}
          <Route path="/obligations/decret-tertiaire" element={<DecretTertiaire />} />
          <Route path="/obligations/decret-bacs" element={<DecretBACS />} />
          <Route path="/obligations/audit-energetique" element={<AuditEnergetique />} />

          {/* Expertises */}
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/expertises/bureau-etudes" element={<BureauEtudes />} />
          <Route path="/expertises/maitrise-oeuvre" element={<MaitriseOeuvre />} />
          <Route path="/expertises/financement-cee" element={<FinancementCEE />} />
          <Route path="/expertises/accompagnement-operat" element={<AccompagnementOPERAT />} />

          {/* Secteurs */}
          <Route path="/secteurs/tertiaire" element={<Tertiaire />} />
          <Route path="/secteurs/industrie" element={<Industrie />} />
          <Route path="/secteurs/collectivites" element={<Collectivites />} />
          <Route path="/secteurs/logement-collectif" element={<LogementCollectif />} />
          <Route path="/secteurs/agricole" element={<Agricole />} />

          {/* Ressources */}
          <Route path="/ressources/blog" element={<Blog />} />
          <Route path="/ressources/blog/:id" element={<BlogArticle />} />
          <Route path="/ressources/guides" element={<Guides />} />
          <Route path="/ressources/guides/decret-tertiaire" element={<GuideDecretTertiaire />} />
          <Route path="/ressources/guides/decret-bacs" element={<GuideDecretBACS />} />
          <Route path="/ressources/guides/operat" element={<GuideOPERAT />} />
          <Route path="/ressources/guides/cee-entreprises" element={<GuideCEE />} />
          <Route path="/ressources/guides/audit-checklist" element={<GuideAuditChecklist />} />
          <Route path="/ressources/guides/plan-actions" element={<GuidePlanActions />} />
          <Route path="/ressources/calendrier" element={<Calendrier />} />

          {/* About */}
          <Route path="/a-propos" element={<APropos />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Legal */}
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/plan-site" element={<ComingSoon title="Plan du Site" />} />

          {/* 404 */}
          <Route path="*" element={<ComingSoon title="Page non trouvée" />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
