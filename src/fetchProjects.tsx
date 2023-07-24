import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "tavk4676d7j8",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsArray = await client.getEntries({
          content_type: "javascriptProjects",
        });
        const projects = projectsArray.items.map((item) => {
          const { title, url_project, github } = item.fields;
          const id = item.sys.id;
          return {
            title,
            url_project,
            image: item.fields.image,
            github,
            id,
          };
        });
        setProjects(projects);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);
  return {
    isLoading,
    projects,
  };
};
