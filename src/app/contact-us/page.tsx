import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import FAQ from '@/components/contactUs/faq/FAQ';
import Form from '@/components/contactUs/form/Form';

export default function page() {
    return (
        <>
            <Header />
            <main className='bg-[#f7f6f8] py-[50px]'>
                <Form />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}
