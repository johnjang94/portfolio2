export default function Resume() {
  return (
    <section>
      <p className="text-center mt-10 text-2xl">
        The following is my sample resume.
      </p>
      <div className="my-10">
        <iframe
          className="pdf mx-auto"
          src="/product_designer.pdf"
          width="800"
          height="500"
        ></iframe>
      </div>
      <div className="flex items-center text-center gap-1 justify-center">
        <p>Please reach out to me</p>
        <a
          href="mailto:jscolbe9675@gmail.com"
          className="text-blue-500 underline"
        >
          here
        </a>
        <p>for more information.</p>
      </div>
    </section>
  );
}
