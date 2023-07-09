package in.angular.journey.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

@RestController
@RequestMapping(value = "/api/V1/resume")
@Slf4j
@CrossOrigin(origins = {"*"})
public class ResumeRestController {
    

    @PostMapping(value = "/upload")
    public boolean uploadResume(@RequestParam("file") MultipartFile file){
        log.info("FILE NAME :: {}", file.getName());
        log.info("FILE SIZE :: {}", file.getSize());
        log.info("FILE CONTENT TYPE :: {}", file.getContentType());
        log.info("FILE ORIGINAL NAME :: {}", file.getOriginalFilename());

        Path resumeFileUploadPath = Paths
                .get("R://ng/resume",file.getOriginalFilename());

        try {
            Path destinationPath = Files.
                    write(resumeFileUploadPath, file.getBytes(), StandardOpenOption.CREATE_NEW);
            log.info("Resume uploaded successfully on path :: {}" , destinationPath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return true;

    }
    
}
