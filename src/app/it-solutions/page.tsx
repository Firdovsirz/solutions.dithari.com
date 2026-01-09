"use client";

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Cta from '@/components/itSolutions/cta/Cta';
import Devops from '@/components/itSolutions/devops/Devops';
import CoreCompetencies from '@/components/itSolutions/coreCompetencies/CoreCompetencies';
import NetworkSolutions from '@/components/itSolutions/networkSolutions/NetworkSolutions';
import EmpoweringInfrastructure from '../../components/itSolutions/empoweringInfrastructure/EmpoweringInfrastructure';

export default function page() {
    return (
        <>
            <Header />
            <main>
                <EmpoweringInfrastructure />
                <CoreCompetencies />
                <NetworkSolutions />
                <Devops />
                <Cta />
            </main>
            <Footer />
        </>
    )
}
