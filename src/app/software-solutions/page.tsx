import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ReadyToTransform from '@/components/softwareSolutions/readyToTransform/ReadyToTransform';
import SoftwareExpertise from '@/components/softwareSolutions/softwareExpertise/SoftwareExpertise';
import EmpoweringBusiness from '@/components/softwareSolutions/empoweringBusiness/EmpoweringBusiness';

export default function page() {
    return (
        <>
            <Header />
            <main>
                <EmpoweringBusiness />
                <SoftwareExpertise />
                <ReadyToTransform />
            </main>
            <Footer />
        </>
    )
}
