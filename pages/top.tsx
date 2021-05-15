import * as React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Container from "@/components/container";
import EntryForm from "@/components/entry-form";

//投稿ページ(top page)
const TopPage = () => {
  return (
    <div>
      <Nav />
      <Container>
        <EntryForm />
      </Container>
      <Footer />
    </div>
  );
};

export default TopPage;
