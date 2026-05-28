import { Card, Input, Typography, Form, Button } from "antd";
import * as styles from "./Constact.css";

const Contact = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  return (
    <>
      <section id="Contact" className={styles.section}>
        <div>
          <Card>
            <Card className={styles.fillupForm}>
              <Title className={styles.contactInfo}>Contact Information</Title>
              <Form className={styles.Form}>
                <Input placeholder="Name"></Input>
              </Form>
              <Form className={styles.Form}>
                <Input placeholder="example@gmail.com"></Input>
              </Form>
              <Form className={styles.Form}>
                <TextArea rows={4} placeholder="Message" />
                <br />
                <br />
                <br />
              </Form>
              <Button className={styles.messageBtn} type="primary">
                Send Message
              </Button>
            </Card>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
