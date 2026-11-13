package com.market.sentiment;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sentiment")
public class SentimentController {

    @GetMapping("/latest")
    public String getLatestSentiment() {
        // TODO: Implement database fetch logic
        return "{"status": "success", "message": "API is running"}";
    }
}
