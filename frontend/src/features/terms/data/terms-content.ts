import type { Language } from "@/lib/data";

interface TermsSection {
  heading: string | null;
  paragraphs: string[];
}

const termsSections: Record<Language, TermsSection[]> = {
  en: [
    {
      heading: null,
      paragraphs: [
        `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.mywebsite.com website and the My Mobile App (change this) mobile application (the "Service") operated by My Company (change this) ("us", "we", or "our").`,
        `Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.`,
        `By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.`,
      ],
    },
    {
      heading: "Purchases",
      paragraphs: [
        `If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your …`,
        `The Purchases section is for businesses that sell online (physical or digital). For the full disclosure section`,
      ],
    },
    {
      heading: "Subscriptions",
      paragraphs: [
        `Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring ...`,
        `The Subscriptions section is for SaaS businesses. For the full disclosure section`,
      ],
    },
    {
      heading: "Content",
      paragraphs: [
        `Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the …`,
        `The Content section is for businesses that allow users to create, edit, share, make content on their websites or apps. For the full disclosure section`,
      ],
    },
    {
      heading: "Links To Other Web Sites",
      paragraphs: [
        `Our Service may contain links to third-party web sites or services that are not owned or controlled by My Company`,
        `My Company (change this) has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.`,
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.`,
      ],
    },
    {
      heading: "Contact Us",
      paragraphs: [`If you have any questions about these Terms, please contact us.`],
    },
  ],
  th: [
    {
      heading: null,
      paragraphs: [
        `กรุณาอ่านข้อกำหนดและเงื่อนไข ("ข้อกำหนด") เหล่านี้อย่างละเอียดก่อนใช้งานเว็บไซต์ http://www.mywebsite.com และแอปพลิเคชันมือถือ My Mobile App (เปลี่ยนชื่อนี้) (เรียกรวมว่า "บริการ") ที่ดำเนินงานโดย My Company (เปลี่ยนชื่อนี้) ("เรา" หรือ "ของเรา")`,
        `การเข้าถึงและการใช้บริการของคุณขึ้นอยู่กับการยอมรับและการปฏิบัติตามข้อกำหนดเหล่านี้ ข้อกำหนดเหล่านี้มีผลบังคับใช้กับผู้เข้าชม ผู้ใช้ และบุคคลอื่นทั้งหมดที่เข้าถึงหรือใช้บริการ`,
        `การเข้าถึงหรือใช้บริการถือว่าคุณตกลงผูกพันตามข้อกำหนดเหล่านี้ หากคุณไม่เห็นด้วยกับส่วนใดส่วนหนึ่งของข้อกำหนด คุณจะไม่สามารถเข้าถึงบริการได้`,
      ],
    },
    {
      heading: "การซื้อสินค้า",
      paragraphs: [
        `หากคุณต้องการซื้อผลิตภัณฑ์หรือบริการที่มีให้ผ่านบริการ ("การซื้อ") คุณอาจถูกขอให้ให้ข้อมูลบางอย่างที่เกี่ยวข้องกับการซื้อของคุณ รวมถึง แต่ไม่จำกัดเฉพาะ ...`,
        `ส่วนการซื้อสำหรับธุรกิจที่ขายออนไลน์ (ทางกายภาพหรือดิจิทัล) สำหรับส่วนการเปิดเผยข้อมูลฉบับเต็ม`,
      ],
    },
    {
      heading: "การสมัครสมาชิก",
      paragraphs: [
        `บางส่วนของบริการมีการเรียกเก็บเงินตามรอบการสมัครสมาชิก ("การสมัครสมาชิก") คุณจะถูกเรียกเก็บเงินล่วงหน้าแบบต่อเนื่อง ...`,
        `ส่วนการสมัครสมาชิกสำหรับธุรกิจ SaaS สำหรับส่วนการเปิดเผยข้อมูลฉบับเต็ม`,
      ],
    },
    {
      heading: "เนื้อหา",
      paragraphs: [
        `บริการของเราช่วยให้คุณโพสต์ เชื่อมโยง จัดเก็บ แบ่งปัน และเผยแพร่ข้อมูล ข้อความ กราฟิก วิดีโอ หรือเนื้อหาอื่น ๆ ("เนื้อหา") คุณมีหน้าที่รับผิดชอบต่อ ...`,
        `ส่วนเนื้อหาสำหรับธุรกิจที่อนุญาตให้ผู้ใช้สร้าง แก้ไข แบ่งปัน เนื้อหาบนเว็บไซต์หรือแอปของตน สำหรับส่วนการเปิดเผยข้อมูลฉบับเต็ม`,
      ],
    },
    {
      heading: "ลิงก์ไปยังเว็บไซต์อื่น",
      paragraphs: [
        `บริการของเราอาจมีลิงก์ไปยังเว็บไซต์หรือบริการของบุคคลที่สามที่ไม่ได้เป็นของหรือควบคุมโดย My Company`,
        `My Company (เปลี่ยนชื่อนี้) ไม่มีอำนาจควบคุมและไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว หรือการปฏิบัติของเว็บไซต์หรือบริการของบุคคลที่สามใด ๆ คุณรับทราบและตกลงว่า My Company (เปลี่ยนชื่อนี้) จะไม่รับผิดชอบไม่ว่าทางตรงหรือทางอ้อมสำหรับความเสียหายหรือความสูญเสียใด ๆ ที่เกิดขึ้นจากการใช้เนื้อหา สินค้า หรือบริการที่มีในเว็บไซต์หรือบริการดังกล่าว`,
      ],
    },
    {
      heading: "การเปลี่ยนแปลง",
      paragraphs: [
        `เราสงวนสิทธิ์ตามดุลยพินิจของเราแต่เพียงผู้เดียวในการแก้ไขหรือแทนที่ข้อกำหนดเหล่านี้ได้ตลอดเวลา หากการแก้ไขนั้นมีนัยสำคัญ เราจะพยายามแจ้งให้ทราบล่วงหน้าอย่างน้อย 30 (เปลี่ยนตัวเลขนี้) วันก่อนที่ข้อกำหนดใหม่จะมีผลบังคับใช้`,
      ],
    },
    {
      heading: "ติดต่อเรา",
      paragraphs: [`หากคุณมีคำถามใด ๆ เกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเรา`],
    },
  ],
};

export function getTermsSections(language: Language): TermsSection[] {
  return termsSections[language];
}
