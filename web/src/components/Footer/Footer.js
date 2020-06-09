import React from "react";
import { TwitterSquare, LinkedinIn, GithubSquare } from "@styled-icons/fa-brands";

export const Footer = ({
  authorName,
  githubLink,
  twitterLink,
  linkedInLink,
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer__description">
          <span>
            Criado por
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              {" "}
              {authorName}
            </a>
          </span>
        </section>

        <section className="footer__social-links">
        <a
              className="footer__social__github"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubSquare size="30" />
            </a>

          {twitterLink && (
            <a
              className="footer__social__twitter"
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSquare size="30" />
            </a>
          )}
          {linkedInLink !== undefined && (
            <a
              className="footer__social__linkedin"
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIn size="30" />
            </a>
          )}
        </section>
      </div>
    </footer>
  );
};

export default Footer;