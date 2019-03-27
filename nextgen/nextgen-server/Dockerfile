FROM tomcat:8.5-alpine
VOLUME /tmp
COPY target/nextgen-server-0.0.1-SNAPSHOT.war usr/local/tomcat/webapps/app.war
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","usr/local/tomcat/webapps/app.war"]
EXPOSE 8080